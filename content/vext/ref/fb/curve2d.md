---
title: Curve2D
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[Curve2D](#constructor-0)**() |
| **[Curve2D](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[Curve2D](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "curve" >}} | [Vec2](/vext/ref/shared/class/vec2)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "Curve2D" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### Curve2D {#constructor-0}
> **Curve2D**()

Creates a new [Curve2D](/vext/ref/fb/curve2d) frostbite instance.

### Curve2D {#constructor-1}
> **Curve2D**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [Curve2D](/vext/ref/fb/curve2d) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### Curve2D {#constructor-2}
> **Curve2D**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [Curve2D](/vext/ref/fb/curve2d). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [Curve2D](/vext/ref/fb/curve2d). |

## Properties
### {{% prop-heading "curve" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [Curve2D](/vext/ref/fb/curve2d) type.

