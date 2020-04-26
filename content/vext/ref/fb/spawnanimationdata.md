---
title: SpawnAnimationData
---

Inherits from [ProcessorData](/vext/ref/fb/processordata)

## Summary

### Constructors

|  |
| --- |
| **[SpawnAnimationData](#constructor-0)**() |
| **[SpawnAnimationData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SpawnAnimationData](#constructor-2)**(other: [ProcessorData](/vext/ref/fb/processordata)) |
| **[SpawnAnimationData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[SpawnAnimationData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "animationSpeed" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpawnAnimationData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpawnAnimationData {#constructor-0}

> **SpawnAnimationData**()

Creates a new [SpawnAnimationData](/vext/ref/fb/spawnanimationdata) frostbite instance.

### SpawnAnimationData {#constructor-1}

> **SpawnAnimationData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SpawnAnimationData](/vext/ref/fb/spawnanimationdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SpawnAnimationData {#constructor-2}

> **SpawnAnimationData**(other: [ProcessorData](/vext/ref/fb/processordata))

Casts an instance of type [ProcessorData](/vext/ref/fb/processordata) to [SpawnAnimationData](/vext/ref/fb/spawnanimationdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProcessorData](/vext/ref/fb/processordata) | The instance to cast to [SpawnAnimationData](/vext/ref/fb/spawnanimationdata). |

### SpawnAnimationData {#constructor-3}

> **SpawnAnimationData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [SpawnAnimationData](/vext/ref/fb/spawnanimationdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [SpawnAnimationData](/vext/ref/fb/spawnanimationdata). |

### SpawnAnimationData {#constructor-4}

> **SpawnAnimationData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SpawnAnimationData](/vext/ref/fb/spawnanimationdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SpawnAnimationData](/vext/ref/fb/spawnanimationdata). |

## Properties

### {{% prop-heading "animationSpeed" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SpawnAnimationData](/vext/ref/fb/spawnanimationdata) type.

