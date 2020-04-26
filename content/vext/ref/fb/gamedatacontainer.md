---
title: GameDataContainer
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[GameDataContainer](#constructor-0)**() |
| **[GameDataContainer](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[GameDataContainer](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GameDataContainer" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GameDataContainer {#constructor-0}
> **GameDataContainer**()

Creates a new [GameDataContainer](/vext/ref/fb/gamedatacontainer) frostbite instance.

### GameDataContainer {#constructor-1}
> **GameDataContainer**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [GameDataContainer](/vext/ref/fb/gamedatacontainer) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### GameDataContainer {#constructor-2}
> **GameDataContainer**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameDataContainer](/vext/ref/fb/gamedatacontainer). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [GameDataContainer](/vext/ref/fb/gamedatacontainer). |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GameDataContainer](/vext/ref/fb/gamedatacontainer) type.

