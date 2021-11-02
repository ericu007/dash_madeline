
module Dashmadeline
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("dashmadeline.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dashmadeline",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "dashmadeline.min.js",
    external_url = "https://unpkg.com/dashmadeline@0.0.1/dashmadeline/dashmadeline.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dashmadeline.min.js.map",
    external_url = "https://unpkg.com/dashmadeline@0.0.1/dashmadeline/dashmadeline.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
