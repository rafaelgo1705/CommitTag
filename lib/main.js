"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import core from "@actions/core";
const utils_1 = __importDefault(require("@actions/github/lib/utils"));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const token = core.getInput("repo-token", { required: true });
            // const tag = core.getInput("tag", { required: true });
            const sha = utils_1.default.context.sha;
            // const client = new github.GitHub({ auth: token });
            // core.debug(`Tagging #${sha} with tag ${tag}`);
            // await client.rest.git.createRef({
            //   owner: github.context.repo.owner,
            //   repo: github.context.repo.repo,
            //   ref: `refs/tags/${tag}`,
            //   sha: sha,
            // });
        }
        catch (error) {
            // core.error(error);
            // core.setFailed(error.message);
        }
    });
}
run();
