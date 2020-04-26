---
title: CharacterPhysicsComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[CharacterPhysicsComponentData](#constructor-0)**() |
| **[CharacterPhysicsComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CharacterPhysicsComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[CharacterPhysicsComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CharacterPhysicsComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CharacterPhysicsComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "characterPhysics" >}} | [CharacterPhysicsData](/vext/ref/fb/characterphysicsdata) \| nil |
| {{< prop "enableCollisionOnSpawn" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CharacterPhysicsComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CharacterPhysicsComponentData {#constructor-0}

> **CharacterPhysicsComponentData**()

Creates a new [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata) frostbite instance.

### CharacterPhysicsComponentData {#constructor-1}

> **CharacterPhysicsComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CharacterPhysicsComponentData {#constructor-2}

> **CharacterPhysicsComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata). |

### CharacterPhysicsComponentData {#constructor-3}

> **CharacterPhysicsComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata). |

### CharacterPhysicsComponentData {#constructor-4}

> **CharacterPhysicsComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata). |

### CharacterPhysicsComponentData {#constructor-5}

> **CharacterPhysicsComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata). |

## Properties

### {{% prop-heading "characterPhysics" %}}

> **[CharacterPhysicsData](/vext/ref/fb/characterphysicsdata)** \| **nil**

### {{% prop-heading "enableCollisionOnSpawn" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CharacterPhysicsComponentData](/vext/ref/fb/characterphysicscomponentdata) type.

