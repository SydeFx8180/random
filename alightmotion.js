try {
    var objc = JSON.parse($response.body);
} catch (e) {
    console.error("Failed to parse JSON:", e);
    // Handle the error, e.g., set objc to a default value or return an error response
    objc = {
        "result": {
            "result": "error",
            "message": "Invalid JSON response"
        }
    };
}

objc = {
    "result": {
        "result": "success",
        "msTime": 1709216800128,
        "accountCreatedMillis": null,
        "licenses": [
            {
                "benefits": [
                    "RemoveWatermark",
                    "MemberEffects",
                    "ProjectPackageSharing",
                    "FutureMemberFeatures",
                    "AdvancedEasing",
                    "CameraObjects",
                    "LayerParenting",
                    "CloudStorageLowTier"
                ],
                "type": "subscription",
                "store": "apple_app_store",
                "autoRenewing": true,
                "orderNumber": "300001752007005",
                "productId": "alightcreative.motion.1y_t60_1w",
                "period": "1y",
                "label": null,
                "details": null,
                "expires": 1740926942000,
                "valid": true,
                "linkStatus": "linked-current"
            }
        ],
        "warnings": []
    }
};

$done({ body: JSON.stringify(objc) });
