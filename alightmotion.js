// Store the response body for inspection
var responseBody = $response.body;

// Attempt to parse the response body
var objc;
try {
    // Log the response body for debugging purposes
    // You may need to replace this with a suitable logging mechanism if available
    if (typeof log === 'function') {
        log(responseBody); // Replace with your logging function if available
    }

    // Attempt to parse the response body
    objc = JSON.parse(responseBody);
} catch (e) {
    // Handle JSON parsing error
    objc = {
        "result": {
            "result": "error",
            "message": "Invalid JSON response: " + responseBody // Include the response for debugging
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
