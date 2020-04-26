---
title: AntProjectAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[AntProjectAsset](#constructor-0)**() |
| **[AntProjectAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AntProjectAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AntProjectAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "packageAssets" >}} | [AntPackageAsset](/vext/ref/fb/antpackageasset)[] |
| {{< prop "antNativeProjectName" >}} | string |
| {{< prop "sceneOp" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "projectId" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntProjectAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntProjectAsset {#constructor-0}
> **AntProjectAsset**()

Creates a new [AntProjectAsset](/vext/ref/fb/antprojectasset) frostbite instance.

### AntProjectAsset {#constructor-1}
> **AntProjectAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AntProjectAsset](/vext/ref/fb/antprojectasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AntProjectAsset {#constructor-2}
> **AntProjectAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AntProjectAsset](/vext/ref/fb/antprojectasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AntProjectAsset](/vext/ref/fb/antprojectasset). |

### AntProjectAsset {#constructor-3}
> **AntProjectAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AntProjectAsset](/vext/ref/fb/antprojectasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AntProjectAsset](/vext/ref/fb/antprojectasset). |

## Properties
### {{% prop-heading "packageAssets" %}}
> **[AntPackageAsset](/vext/ref/fb/antpackageasset)**[]

### {{% prop-heading "antNativeProjectName" %}}
> **string**

### {{% prop-heading "sceneOp" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "projectId" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntProjectAsset](/vext/ref/fb/antprojectasset) type.

