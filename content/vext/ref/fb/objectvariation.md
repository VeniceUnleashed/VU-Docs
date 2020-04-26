---
title: ObjectVariation
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[ObjectVariation](#constructor-0)**() |
| **[ObjectVariation](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ObjectVariation](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[ObjectVariation](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "nameHash" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ObjectVariation" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ObjectVariation {#constructor-0}
> **ObjectVariation**()

Creates a new [ObjectVariation](/vext/ref/fb/objectvariation) frostbite instance.

### ObjectVariation {#constructor-1}
> **ObjectVariation**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ObjectVariation](/vext/ref/fb/objectvariation) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ObjectVariation {#constructor-2}
> **ObjectVariation**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [ObjectVariation](/vext/ref/fb/objectvariation). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [ObjectVariation](/vext/ref/fb/objectvariation). |

### ObjectVariation {#constructor-3}
> **ObjectVariation**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ObjectVariation](/vext/ref/fb/objectvariation). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ObjectVariation](/vext/ref/fb/objectvariation). |

## Properties
### {{% prop-heading "nameHash" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ObjectVariation](/vext/ref/fb/objectvariation) type.

