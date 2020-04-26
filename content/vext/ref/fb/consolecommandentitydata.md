---
title: ConsoleCommandEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[ConsoleCommandEntityData](#constructor-0)**() |
| **[ConsoleCommandEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ConsoleCommandEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[ConsoleCommandEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ConsoleCommandEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ConsoleCommandEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "commands" >}} | string[] |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ConsoleCommandEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ConsoleCommandEntityData {#constructor-0}

> **ConsoleCommandEntityData**()

Creates a new [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata) frostbite instance.

### ConsoleCommandEntityData {#constructor-1}

> **ConsoleCommandEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ConsoleCommandEntityData {#constructor-2}

> **ConsoleCommandEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata). |

### ConsoleCommandEntityData {#constructor-3}

> **ConsoleCommandEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata). |

### ConsoleCommandEntityData {#constructor-4}

> **ConsoleCommandEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata). |

### ConsoleCommandEntityData {#constructor-5}

> **ConsoleCommandEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata). |

## Properties

### {{% prop-heading "commands" %}}

> **string**[]

### {{% prop-heading "realm" %}}

> **[Realm](/vext/ref/fb/realm)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ConsoleCommandEntityData](/vext/ref/fb/consolecommandentitydata) type.

