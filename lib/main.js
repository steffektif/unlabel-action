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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github_1 = require("@actions/github");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const octokit = new github_1.GitHub(core.getInput('repo_token'));
            const { owner, repo } = github_1.context.repo;
            const labelName = core.getInput('label_name');
            const issueNumber = github_1.context.issue.number;
            octokit.issues.removeLabel({
                issue_number: issueNumber,
                name: labelName,
                owner: owner,
                repo: repo
            });
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
