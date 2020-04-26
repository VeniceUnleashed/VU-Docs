---
title: StaticModelNetworkInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[StaticModelNetworkInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "partNetworkIdRanges" >}} | [IndexRange](/vext/ref/fb/indexrange)[] |
| {{< prop "networkIdCount" >}} | int |
| {{< prop "childNetworkInfos" >}} | [ChildStaticModelNetworkInfo](/vext/ref/fb/childstaticmodelnetworkinfo)[] |
| {{< prop "childNetworkIdCount" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [StaticModelNetworkInfo](/vext/ref/fb/staticmodelnetworkinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "StaticModelNetworkInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### StaticModelNetworkInfo {#constructor-0}
> **StaticModelNetworkInfo**()

Creates a new [StaticModelNetworkInfo](/vext/ref/fb/staticmodelnetworkinfo) frostbite structure.

## Properties
### {{% prop-heading "partNetworkIdRanges" %}}
> **[IndexRange](/vext/ref/fb/indexrange)**[]

### {{% prop-heading "networkIdCount" %}}
> **int**

### {{% prop-heading "childNetworkInfos" %}}
> **[ChildStaticModelNetworkInfo](/vext/ref/fb/childstaticmodelnetworkinfo)**[]

### {{% prop-heading "childNetworkIdCount" %}}
> **int**

## Methods
### Clone
> **Clone**(): [StaticModelNetworkInfo](/vext/ref/fb/staticmodelnetworkinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[StaticModelNetworkInfo](/vext/ref/fb/staticmodelnetworkinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [StaticModelNetworkInfo](/vext/ref/fb/staticmodelnetworkinfo) type.

