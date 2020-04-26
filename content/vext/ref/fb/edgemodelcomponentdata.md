---
title: EdgeModelComponentData
---

Inherits from [DestructionEdgeModelComponentData](/vext/ref/fb/destructionedgemodelcomponentdata)

## Summary

### Constructors

|  |
| --- |
| **[EdgeModelComponentData](#constructor-0)**() |
| **[EdgeModelComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EdgeModelComponentData](#constructor-2)**(other: [DestructionEdgeModelComponentData](/vext/ref/fb/destructionedgemodelcomponentdata)) |
| **[EdgeModelComponentData](#constructor-3)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[EdgeModelComponentData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[EdgeModelComponentData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[EdgeModelComponentData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rigidMeshes" >}} | [RigidMeshAsset](/vext/ref/fb/rigidmeshasset)[] |
| {{< prop "maxInstanceCount" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EdgeModelComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EdgeModelComponentData {#constructor-0}

> **EdgeModelComponentData**()

Creates a new [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata) frostbite instance.

### EdgeModelComponentData {#constructor-1}

> **EdgeModelComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EdgeModelComponentData {#constructor-2}

> **EdgeModelComponentData**(other: [DestructionEdgeModelComponentData](/vext/ref/fb/destructionedgemodelcomponentdata))

Casts an instance of type [DestructionEdgeModelComponentData](/vext/ref/fb/destructionedgemodelcomponentdata) to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DestructionEdgeModelComponentData](/vext/ref/fb/destructionedgemodelcomponentdata) | The instance to cast to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata). |

### EdgeModelComponentData {#constructor-3}

> **EdgeModelComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata). |

### EdgeModelComponentData {#constructor-4}

> **EdgeModelComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata). |

### EdgeModelComponentData {#constructor-5}

> **EdgeModelComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata). |

### EdgeModelComponentData {#constructor-6}

> **EdgeModelComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata). |

## Properties

### {{% prop-heading "rigidMeshes" %}}

> **[RigidMeshAsset](/vext/ref/fb/rigidmeshasset)**[]

### {{% prop-heading "maxInstanceCount" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EdgeModelComponentData](/vext/ref/fb/edgemodelcomponentdata) type.

