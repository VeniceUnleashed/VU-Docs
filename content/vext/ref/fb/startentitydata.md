---
title: StartEntityData
---

Inherits from [EntityData](/vext/ref/fb/entitydata)

## Summary

### Constructors

|  |
| --- |
| **[StartEntityData](#constructor-0)**() |
| **[StartEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StartEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[StartEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[StartEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[StartEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "sortIndex" >}} | float |
| {{< prop "startName" >}} | string |
| {{< prop "isDefault" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StartEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StartEntityData {#constructor-0}

> **StartEntityData**()

Creates a new [StartEntityData](/vext/ref/fb/startentitydata) frostbite instance.

### StartEntityData {#constructor-1}

> **StartEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StartEntityData](/vext/ref/fb/startentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StartEntityData {#constructor-2}

> **StartEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [StartEntityData](/vext/ref/fb/startentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [StartEntityData](/vext/ref/fb/startentitydata). |

### StartEntityData {#constructor-3}

> **StartEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [StartEntityData](/vext/ref/fb/startentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [StartEntityData](/vext/ref/fb/startentitydata). |

### StartEntityData {#constructor-4}

> **StartEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [StartEntityData](/vext/ref/fb/startentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [StartEntityData](/vext/ref/fb/startentitydata). |

### StartEntityData {#constructor-5}

> **StartEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StartEntityData](/vext/ref/fb/startentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StartEntityData](/vext/ref/fb/startentitydata). |

## Properties

### {{% prop-heading "sortIndex" %}}

> **float**

### {{% prop-heading "startName" %}}

> **string**

### {{% prop-heading "isDefault" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StartEntityData](/vext/ref/fb/startentitydata) type.

