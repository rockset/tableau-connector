FROM openjdk:11
WORKDIR /rockset

# build the rockset.taco file and save it locally in builds/rockset.taco
build:
    COPY . .
    RUN apt-get update && apt-get install -y python3.7 python3.7-distutils python3-setuptools python3-pip
    RUN git clone https://github.com/tableau/connector-plugin-sdk.git
    RUN cd connector-plugin-sdk/connector-packager && \
        python3.7 setup.py install && \
        python3.7 -m connector_packager.package /rockset/tableau-rockset
    SAVE ARTIFACT connector-plugin-sdk/connector-packager/packaged-connector/rockset.taco AS LOCAL build/rockset.taco

# this step is only available when you have access to the rockset.jks keystore, and saves the signed file in signed/rockset.taco
sign:
    COPY rockset.jks .
    COPY +build/rockset.taco .
    RUN --secret STOREPASS=+secrets/STOREPASS jarsigner -keystore rockset.jks -storepass $STOREPASS -tsa http://ts.ssl.com rockset.taco rockset
    SAVE ARTIFACT rockset.taco AS LOCAL signed/rockset.taco
