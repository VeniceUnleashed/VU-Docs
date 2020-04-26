---
title: DebrisHavokInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[DebrisHavokInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "havokAsset" >}} | [HavokAsset](/vext/ref/fb/havokasset) \| nil |
| {{< prop "reserveCount" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DebrisHavokInfo](/vext/ref/fb/debrishavokinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DebrisHavokInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DebrisHavokInfo {#constructor-0}
> **DebrisHavokInfo**()

Creates a new [DebrisHavokInfo](/vext/ref/fb/debrishavokinfo) frostbite structure.

## Properties
### {{% prop-heading "havokAsset" %}}
> **[HavokAsset](/vext/ref/fb/havokasset)** | **nil**

### {{% prop-heading "reserveCount" %}}
> **int**

## Methods
### Clone
> **Clone**(): [DebrisHavokInfo](/vext/ref/fb/debrishavokinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DebrisHavokInfo](/vext/ref/fb/debrishavokinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DebrisHavokInfo](/vext/ref/fb/debrishavokinfo) type.

