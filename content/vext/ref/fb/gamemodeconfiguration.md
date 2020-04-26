---
title: GameModeConfiguration
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[GameModeConfiguration](#constructor-0)**() |
| **[GameModeConfiguration](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[GameModeConfiguration](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[GameModeConfiguration](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "information" >}} | [GameModeInformation](/vext/ref/fb/gamemodeinformation)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GameModeConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GameModeConfiguration {#constructor-0}
> **GameModeConfiguration**()

Creates a new [GameModeConfiguration](/vext/ref/fb/gamemodeconfiguration) frostbite instance.

### GameModeConfiguration {#constructor-1}
> **GameModeConfiguration**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [GameModeConfiguration](/vext/ref/fb/gamemodeconfiguration) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### GameModeConfiguration {#constructor-2}
> **GameModeConfiguration**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [GameModeConfiguration](/vext/ref/fb/gamemodeconfiguration). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [GameModeConfiguration](/vext/ref/fb/gamemodeconfiguration). |

### GameModeConfiguration {#constructor-3}
> **GameModeConfiguration**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameModeConfiguration](/vext/ref/fb/gamemodeconfiguration). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [GameModeConfiguration](/vext/ref/fb/gamemodeconfiguration). |

## Properties
### {{% prop-heading "information" %}}
> **[GameModeInformation](/vext/ref/fb/gamemodeinformation)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GameModeConfiguration](/vext/ref/fb/gamemodeconfiguration) type.

