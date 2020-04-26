---
title: AntRef
---


## Summary
### Constructors
| |
| ----------- |
| **[AntRef](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "assetId" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AntRef](/vext/ref/fb/antref) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AntRef" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AntRef {#constructor-0}
> **AntRef**()

Creates a new [AntRef](/vext/ref/fb/antref) frostbite structure.

## Properties
### {{% prop-heading "assetId" %}}
> **int**

## Methods
### Clone
> **Clone**(): [AntRef](/vext/ref/fb/antref)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AntRef](/vext/ref/fb/antref)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AntRef](/vext/ref/fb/antref) type.

