---
title: EntitlementQuery
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[EntitlementQuery](#constructor-0)**() |
| **[EntitlementQuery](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EntitlementQuery](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[EntitlementQuery](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "entitlementsData" >}} | [EntitlementData](/vext/ref/fb/entitlementdata)[] |
| {{< prop "groupNames" >}} | string[] |
| {{< prop "platform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "entitlementTag" >}} | string |
| {{< prop "productId" >}} | string |
| {{< prop "projectId" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EntitlementQuery" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EntitlementQuery {#constructor-0}
> **EntitlementQuery**()

Creates a new [EntitlementQuery](/vext/ref/fb/entitlementquery) frostbite instance.

### EntitlementQuery {#constructor-1}
> **EntitlementQuery**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EntitlementQuery](/vext/ref/fb/entitlementquery) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EntitlementQuery {#constructor-2}
> **EntitlementQuery**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [EntitlementQuery](/vext/ref/fb/entitlementquery). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [EntitlementQuery](/vext/ref/fb/entitlementquery). |

### EntitlementQuery {#constructor-3}
> **EntitlementQuery**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntitlementQuery](/vext/ref/fb/entitlementquery). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EntitlementQuery](/vext/ref/fb/entitlementquery). |

## Properties
### {{% prop-heading "entitlementsData" %}}
> **[EntitlementData](/vext/ref/fb/entitlementdata)**[]

### {{% prop-heading "groupNames" %}}
> **string**[]

### {{% prop-heading "platform" %}}
> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "entitlementTag" %}}
> **string**

### {{% prop-heading "productId" %}}
> **string**

### {{% prop-heading "projectId" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EntitlementQuery](/vext/ref/fb/entitlementquery) type.

