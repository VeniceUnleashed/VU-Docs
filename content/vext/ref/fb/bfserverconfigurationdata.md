---
title: BFServerConfigurationData
---


## Summary
### Constructors
| |
| ----------- |
| **[BFServerConfigurationData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "scoreMultiplier" >}} | int |
| {{< prop "licenses" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [BFServerConfigurationData](/vext/ref/fb/bfserverconfigurationdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BFServerConfigurationData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BFServerConfigurationData {#constructor-0}
> **BFServerConfigurationData**()

Creates a new [BFServerConfigurationData](/vext/ref/fb/bfserverconfigurationdata) frostbite structure.

## Properties
### {{% prop-heading "scoreMultiplier" %}}
> **int**

### {{% prop-heading "licenses" %}}
> **string**

## Methods
### Clone
> **Clone**(): [BFServerConfigurationData](/vext/ref/fb/bfserverconfigurationdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[BFServerConfigurationData](/vext/ref/fb/bfserverconfigurationdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BFServerConfigurationData](/vext/ref/fb/bfserverconfigurationdata) type.

