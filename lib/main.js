"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github/lib/utils"));
async function run() {
    try {
        const token = core.getInput("secret-token", { required: true });
        const tag = core.getInput("tag", { required: true });
        const sha = github.context.sha;
        const client = new github.GitHub({ auth: token });
        core.debug(`Tagging #${sha} with tag ${tag}`);
        await client.rest.git.createRef({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            ref: `refs/tags/${tag}`,
            sha: sha,
        });
    }
    catch (error) {
        core.error(error);
        core.setFailed(error.message);
    }
}
run();
