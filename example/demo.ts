import { AndamioProvider } from '../src'

const main = async () => {
    try {
        const provider = new AndamioProvider({
            baseUrl: "https://preprod.utxorpc-v0.demeter.run:443",
            network: "Preprod",
            dmtr_api_key: "dmtr_utxorpc15dnupstcsym5xjd7yha0eccta5x6s353"
        })

        // const course_info = await provider.aggregate.courseInfo.enrolled("95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8")
        // console.log("number of students enrolled in the course: ", course_info)

        // const course_info = await provider.aggregate.courseInfo.modules("95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8")
        // console.log("number of modules published for the course: ", course_info)

        // const project_info = await provider.aggregate.projectInfo.funds("5f40046e0c6a7c06425c66606b0d31fb89eba6402c33a97e411667bc")
        // console.log("amount of lovelace available in the project treasury: ", project_info)

        const user_info = await provider.aggregate.userInfo.joined("jerry")
        console.log("total course + project the user has joined: ", user_info)

        // provider.core.aliasIndex.getUtxos

    } catch (error) {
        console.error(error)
    }
}

main()