---
title: SyncedGameSettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[SyncedGameSettings](#constructor-0)**() |
| **[SyncedGameSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SyncedGameSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[SyncedGameSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxAllowedLatency" >}} | float |
| {{< prop "manDownTimeModifier" >}} | float |
| {{< prop "bulletDamageModifier" >}} | float |
| {{< prop "difficultyIndex" >}} | int |
| {{< prop "disableRegenerateHealth" >}} | bool |
| {{< prop "enableFriendlyFire" >}} | bool |
| {{< prop "allowClientSideDamageArbitration" >}} | bool |
| {{< prop "disableToggleEntryCamera" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SyncedGameSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SyncedGameSettings {#constructor-0}
> **SyncedGameSettings**()

Creates a new [SyncedGameSettings](/vext/ref/fb/syncedgamesettings) frostbite instance.

### SyncedGameSettings {#constructor-1}
> **SyncedGameSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SyncedGameSettings](/vext/ref/fb/syncedgamesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SyncedGameSettings {#constructor-2}
> **SyncedGameSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [SyncedGameSettings](/vext/ref/fb/syncedgamesettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [SyncedGameSettings](/vext/ref/fb/syncedgamesettings). |

### SyncedGameSettings {#constructor-3}
> **SyncedGameSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SyncedGameSettings](/vext/ref/fb/syncedgamesettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SyncedGameSettings](/vext/ref/fb/syncedgamesettings). |

## Properties
### {{% prop-heading "maxAllowedLatency" %}}
> **float**

### {{% prop-heading "manDownTimeModifier" %}}
> **float**

### {{% prop-heading "bulletDamageModifier" %}}
> **float**

### {{% prop-heading "difficultyIndex" %}}
> **int**

### {{% prop-heading "disableRegenerateHealth" %}}
> **bool**

### {{% prop-heading "enableFriendlyFire" %}}
> **bool**

### {{% prop-heading "allowClientSideDamageArbitration" %}}
> **bool**

### {{% prop-heading "disableToggleEntryCamera" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SyncedGameSettings](/vext/ref/fb/syncedgamesettings) type.

