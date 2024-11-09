// Store the response body for inspection
var responseBody = $response.body;

// Log the response body for debugging (if logging is available in your environment)
if (typeof log === 'function') {
    log(responseBody); // Replace with your logging function if available
}

// Attempt to parse the response body
var objc;
try {
    objc = JSON.parse(responseBody);
} catch (e) {
    // Handle JSON parsing error
    // You can set objc to a default value or handle the error as needed
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
