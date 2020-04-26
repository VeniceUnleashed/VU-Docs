---
title: LevelDescription
---


## Summary
### Constructors
| |
| ----------- |
| **[LevelDescription](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "description" >}} | string |
| {{< prop "components" >}} | [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent)[] |
| {{< prop "isCoop" >}} | bool |
| {{< prop "isMenu" >}} | bool |
| {{< prop "isMultiplayer" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [LevelDescription](/vext/ref/fb/leveldescription) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LevelDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LevelDescription {#constructor-0}
> **LevelDescription**()

Creates a new [LevelDescription](/vext/ref/fb/leveldescription) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "description" %}}
> **string**

### {{% prop-heading "components" %}}
> **[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent)**[]

### {{% prop-heading "isCoop" %}}
> **bool**

### {{% prop-heading "isMenu" %}}
> **bool**

### {{% prop-heading "isMultiplayer" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [LevelDescription](/vext/ref/fb/leveldescription)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[LevelDescription](/vext/ref/fb/leveldescription)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LevelDescription](/vext/ref/fb/leveldescription) type.

