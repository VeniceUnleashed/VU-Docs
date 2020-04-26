---
title: PlayerInputTriggerEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[PlayerInputTriggerEntityData](#constructor-0)**() |
| **[PlayerInputTriggerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PlayerInputTriggerEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[PlayerInputTriggerEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PlayerInputTriggerEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PlayerInputTriggerEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "entryInputActions" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "valueModifier" >}} | float |
| {{< prop "trailingValueAtStart" >}} | float |
| {{< prop "accumulatedValueAtStart" >}} | float |
| {{< prop "sendTriggerEvents" >}} | bool |
| {{< prop "enabledFromStart" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PlayerInputTriggerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PlayerInputTriggerEntityData {#constructor-0}

> **PlayerInputTriggerEntityData**()

Creates a new [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata) frostbite instance.

### PlayerInputTriggerEntityData {#constructor-1}

> **PlayerInputTriggerEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PlayerInputTriggerEntityData {#constructor-2}

> **PlayerInputTriggerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata). |

### PlayerInputTriggerEntityData {#constructor-3}

> **PlayerInputTriggerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata). |

### PlayerInputTriggerEntityData {#constructor-4}

> **PlayerInputTriggerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata). |

### PlayerInputTriggerEntityData {#constructor-5}

> **PlayerInputTriggerEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata). |

## Properties

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "entryInputActions" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "valueModifier" %}}

> **float**

### {{% prop-heading "trailingValueAtStart" %}}

> **float**

### {{% prop-heading "accumulatedValueAtStart" %}}

> **float**

### {{% prop-heading "sendTriggerEvents" %}}

> **bool**

### {{% prop-heading "enabledFromStart" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PlayerInputTriggerEntityData](/vext/ref/fb/playerinputtriggerentitydata) type.

