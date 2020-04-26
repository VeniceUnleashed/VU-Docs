---
title: EntitlementData
---


## Summary
### Constructors
| |
| ----------- |
| **[EntitlementData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "license" >}} | string |
| {{< prop "entitlementTag" >}} | string |
| {{< prop "groupName" >}} | string |
| {{< prop "productId" >}} | string |
| {{< prop "projectId" >}} | string |
| {{< prop "usageType" >}} | [EntitlementType](/vext/ref/fb/entitlementtype) |
| {{< prop "verifyOwnership" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [EntitlementData](/vext/ref/fb/entitlementdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EntitlementData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EntitlementData {#constructor-0}
> **EntitlementData**()

Creates a new [EntitlementData](/vext/ref/fb/entitlementdata) frostbite structure.

## Properties
### {{% prop-heading "license" %}}
> **string**

### {{% prop-heading "entitlementTag" %}}
> **string**

### {{% prop-heading "groupName" %}}
> **string**

### {{% prop-heading "productId" %}}
> **string**

### {{% prop-heading "projectId" %}}
> **string**

### {{% prop-heading "usageType" %}}
> **[EntitlementType](/vext/ref/fb/entitlementtype)**

### {{% prop-heading "verifyOwnership" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [EntitlementData](/vext/ref/fb/entitlementdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[EntitlementData](/vext/ref/fb/entitlementdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EntitlementData](/vext/ref/fb/entitlementdata) type.

