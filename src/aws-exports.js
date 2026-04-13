const awsmobile = {
    "aws_project_region": process.env.REACT_APP_AWS_PROJECT_REGION || "us-east-1",
    "aws_cognito_identity_pool_id": process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID || "",
    "aws_cognito_region": process.env.REACT_APP_AWS_COGNITO_REGION || "us-east-1",
    "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID || "",
    "aws_user_pools_web_client_id": process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID || "",
    "oauth": {},
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": ["EMAIL"],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": ["SMS"],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": ["EMAIL"],
    "geo": {
        "amazon_location_service": {
            "region": process.env.REACT_APP_AWS_PROJECT_REGION || "us-east-1",
            "maps": {
                "items": {
                    "wherebusMap": {
                        "style": "VectorEsriStreets"
                    },
                    "wherebusMap2": {
                        "style": "VectorEsriLightGrayCanvas"
                    }
                },
                "default": "wherebusMap2"
            },
            "route_calculators": {
                "items": {
                    "wherebus-calculator": {
                        "type": "Default"
                    }
                },
                "default": "wherebus-calculator"
            }
        }
    }
};

export default awsmobile;
