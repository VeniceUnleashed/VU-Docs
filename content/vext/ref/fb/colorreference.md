---
title: ColorReference
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[ColorReference](#constructor-0)**() |
| **[ColorReference](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ColorReference](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[ColorReference](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "color" >}} | [Vec4](/vext/ref/shared/class/vec4) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ColorReference" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ColorReference {#constructor-0}
> **ColorReference**()

Creates a new [ColorReference](/vext/ref/fb/colorreference) frostbite instance.

### ColorReference {#constructor-1}
> **ColorReference**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ColorReference](/vext/ref/fb/colorreference) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ColorReference {#constructor-2}
> **ColorReference**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [ColorReference](/vext/ref/fb/colorreference). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [ColorReference](/vext/ref/fb/colorreference). |

### ColorReference {#constructor-3}
> **ColorReference**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ColorReference](/vext/ref/fb/colorreference). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ColorReference](/vext/ref/fb/colorreference). |

## Properties
### {{% prop-heading "color" %}}
> **[Vec4](/vext/ref/shared/class/vec4)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ColorReference](/vext/ref/fb/colorreference) type.

