import { ConfigService } from "@nestjs/config";
import { TypegooseModuleOptions } from "nestjs-typegoose";

export const getMongoConfig = async (configService : ConfigService) : Promise<TypegooseModuleOptions> => {
    return {
        uri: getMongoUri(configService),
        ...getMongoOptins()
    };
};

const getMongoUri = (configService : ConfigService) =>
    configService.get('MONGO_URI')

const getMongoOptins = () => ({
    useNewUrlParser : true,
    useCreatedIndex : true,
    useUnifiedTopology : true
})