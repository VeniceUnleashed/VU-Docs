---
title: SyncedBFSettings
---

Inherits from [SystemSettings](/vext/ref/fb/systemsettings)

## Summary

### Constructors

|  |
| --- |
| **[SyncedBFSettings](#constructor-0)**() |
| **[SyncedBFSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SyncedBFSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[SyncedBFSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "gameModeCounterModifier" >}} | float |
| {{< prop "unlicensedUnlocksUnlocked" >}} | bool |
| {{< prop "noMinimap" >}} | bool |
| {{< prop "noHud" >}} | bool |
| {{< prop "noMinimapSpotting" >}} | bool |
| {{< prop "no3dSpotting" >}} | bool |
| {{< prop "noNameTag" >}} | bool |
| {{< prop "onlySquadLeaderSpawn" >}} | bool |
| {{< prop "teamSwitchingAllowed" >}} | bool |
| {{< prop "memoryDefragUI" >}} | bool |
| {{< prop "memoryGarbageCollectHavok" >}} | bool |
| {{< prop "memoryDefragGlobal" >}} | bool |
| {{< prop "allUnlocksUnlocked" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SyncedBFSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SyncedBFSettings {#constructor-0}

> **SyncedBFSettings**()

Creates a new [SyncedBFSettings](/vext/ref/fb/syncedbfsettings) frostbite instance.

### SyncedBFSettings {#constructor-1}

> **SyncedBFSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SyncedBFSettings](/vext/ref/fb/syncedbfsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SyncedBFSettings {#constructor-2}

> **SyncedBFSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [SyncedBFSettings](/vext/ref/fb/syncedbfsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [SyncedBFSettings](/vext/ref/fb/syncedbfsettings). |

### SyncedBFSettings {#constructor-3}

> **SyncedBFSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SyncedBFSettings](/vext/ref/fb/syncedbfsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SyncedBFSettings](/vext/ref/fb/syncedbfsettings). |

## Properties

### {{% prop-heading "gameModeCounterModifier" %}}

> **float**

### {{% prop-heading "unlicensedUnlocksUnlocked" %}}

> **bool**

### {{% prop-heading "noMinimap" %}}

> **bool**

### {{% prop-heading "noHud" %}}

> **bool**

### {{% prop-heading "noMinimapSpotting" %}}

> **bool**

### {{% prop-heading "no3dSpotting" %}}

> **bool**

### {{% prop-heading "noNameTag" %}}

> **bool**

### {{% prop-heading "onlySquadLeaderSpawn" %}}

> **bool**

### {{% prop-heading "teamSwitchingAllowed" %}}

> **bool**

### {{% prop-heading "memoryDefragUI" %}}

> **bool**

### {{% prop-heading "memoryGarbageCollectHavok" %}}

> **bool**

### {{% prop-heading "memoryDefragGlobal" %}}

> **bool**

### {{% prop-heading "allUnlocksUnlocked" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SyncedBFSettings](/vext/ref/fb/syncedbfsettings) type.

