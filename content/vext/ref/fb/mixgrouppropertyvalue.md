---
title: MixGroupPropertyValue
---


## Summary
### Constructors
| |
| ----------- |
| **[MixGroupPropertyValue](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "property" >}} | int |
| {{< prop "value" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixGroupPropertyValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixGroupPropertyValue {#constructor-0}
> **MixGroupPropertyValue**()

Creates a new [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue) frostbite structure.

## Properties
### {{% prop-heading "property" %}}
> **int**

### {{% prop-heading "value" %}}
> **float**

## Methods
### Clone
> **Clone**(): [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue) type.

