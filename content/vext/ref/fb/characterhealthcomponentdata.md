---
title: CharacterHealthComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[CharacterHealthComponentData](#constructor-0)**() |
| **[CharacterHealthComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CharacterHealthComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[CharacterHealthComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CharacterHealthComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CharacterHealthComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxHealth" >}} | float |
| {{< prop "regenerateHealthPerSecond" >}} | float |
| {{< prop "regenerateHealth" >}} | bool |
| {{< prop "isImmortal" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CharacterHealthComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CharacterHealthComponentData {#constructor-0}

> **CharacterHealthComponentData**()

Creates a new [CharacterHealthComponentData](/vext/ref/fb/characterhealthcomponentdata) frostbite instance.

### CharacterHealthComponentData {#constructor-1}

> **CharacterHealthComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CharacterHealthComponentData](/vext/ref/fb/characterhealthcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CharacterHealthComponentData {#constructor-2}

> **CharacterHealthComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [CharacterHealthComponentData](/vext/ref/fb/characterhealthcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [CharacterHealthComponentData](/vext/ref/fb/characterhealthcomponentdata). |

### CharacterHealthComponentData {#constructor-3}

> **CharacterHealthComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CharacterHealthComponentData](/vext/ref/fb/characterhealthcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CharacterHealthComponentData](/vext/ref/fb/characterhealthcomponentdata). |

### CharacterHealthComponentData {#constructor-4}

> **CharacterHealthComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CharacterHealthComponentData](/vext/ref/fb/characterhealthcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CharacterHealthComponentData](/vext/ref/fb/characterhealthcomponentdata). |

### CharacterHealthComponentData {#constructor-5}

> **CharacterHealthComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CharacterHealthComponentData](/vext/ref/fb/characterhealthcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CharacterHealthComponentData](/vext/ref/fb/characterhealthcomponentdata). |

## Properties

### {{% prop-heading "maxHealth" %}}

> **float**

### {{% prop-heading "regenerateHealthPerSecond" %}}

> **float**

### {{% prop-heading "regenerateHealth" %}}

> **bool**

### {{% prop-heading "isImmortal" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CharacterHealthComponentData](/vext/ref/fb/characterhealthcomponentdata) type.

