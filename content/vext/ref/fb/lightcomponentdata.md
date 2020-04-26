---
title: LightComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[LightComponentData](#constructor-0)**() |
| **[LightComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LightComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[LightComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[LightComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[LightComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "light" >}} | [LocalLightEntityData](/vext/ref/fb/locallightentitydata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LightComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LightComponentData {#constructor-0}

> **LightComponentData**()

Creates a new [LightComponentData](/vext/ref/fb/lightcomponentdata) frostbite instance.

### LightComponentData {#constructor-1}

> **LightComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LightComponentData](/vext/ref/fb/lightcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LightComponentData {#constructor-2}

> **LightComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [LightComponentData](/vext/ref/fb/lightcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [LightComponentData](/vext/ref/fb/lightcomponentdata). |

### LightComponentData {#constructor-3}

> **LightComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [LightComponentData](/vext/ref/fb/lightcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [LightComponentData](/vext/ref/fb/lightcomponentdata). |

### LightComponentData {#constructor-4}

> **LightComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [LightComponentData](/vext/ref/fb/lightcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [LightComponentData](/vext/ref/fb/lightcomponentdata). |

### LightComponentData {#constructor-5}

> **LightComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LightComponentData](/vext/ref/fb/lightcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LightComponentData](/vext/ref/fb/lightcomponentdata). |

## Properties

### {{% prop-heading "light" %}}

> **[LocalLightEntityData](/vext/ref/fb/locallightentitydata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LightComponentData](/vext/ref/fb/lightcomponentdata) type.

