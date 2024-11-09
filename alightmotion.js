try {
    var objc = JSON.parse($response.body);
} catch (e) {
    // Instead of console.error, you can use a simple log or ignore the error
    // For example, you can set objc to a default value or log to a custom logging function if available
    objc = {
        "result": {
            "result": "error",
            "message": "Invalid JSON response"
        }
    };
}

// Define your desired object structure
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

// Send the response back
$done({ body: JSON.stringify(objc) });
