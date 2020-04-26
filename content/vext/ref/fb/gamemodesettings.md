---
title: GameModeSettings
---

Inherits from [SystemSettings](/vext/ref/fb/systemsettings)

## Summary

### Constructors

|  |
| --- |
| **[GameModeSettings](#constructor-0)**() |
| **[GameModeSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[GameModeSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[GameModeSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "information" >}} | [GameModeInformation](/vext/ref/fb/gamemodeinformation)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GameModeSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GameModeSettings {#constructor-0}

> **GameModeSettings**()

Creates a new [GameModeSettings](/vext/ref/fb/gamemodesettings) frostbite instance.

### GameModeSettings {#constructor-1}

> **GameModeSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GameModeSettings](/vext/ref/fb/gamemodesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### GameModeSettings {#constructor-2}

> **GameModeSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [GameModeSettings](/vext/ref/fb/gamemodesettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [GameModeSettings](/vext/ref/fb/gamemodesettings). |

### GameModeSettings {#constructor-3}

> **GameModeSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [GameModeSettings](/vext/ref/fb/gamemodesettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [GameModeSettings](/vext/ref/fb/gamemodesettings). |

## Properties

### {{% prop-heading "information" %}}

> **[GameModeInformation](/vext/ref/fb/gamemodeinformation)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GameModeSettings](/vext/ref/fb/gamemodesettings) type.

