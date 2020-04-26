---
title: SpawnRateData
---

Inherits from [ProcessorData](/vext/ref/fb/processordata)

## Summary

### Constructors

|  |
| --- |
| **[SpawnRateData](#constructor-0)**() |
| **[SpawnRateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SpawnRateData](#constructor-2)**(other: [ProcessorData](/vext/ref/fb/processordata)) |
| **[SpawnRateData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[SpawnRateData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "spawnRate" >}} | float |
| {{< prop "trailSegmentLength" >}} | float |
| {{< prop "distributeOverTime" >}} | bool |
| {{< prop "distributeOverDistance" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpawnRateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpawnRateData {#constructor-0}

> **SpawnRateData**()

Creates a new [SpawnRateData](/vext/ref/fb/spawnratedata) frostbite instance.

### SpawnRateData {#constructor-1}

> **SpawnRateData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SpawnRateData](/vext/ref/fb/spawnratedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SpawnRateData {#constructor-2}

> **SpawnRateData**(other: [ProcessorData](/vext/ref/fb/processordata))

Casts an instance of type [ProcessorData](/vext/ref/fb/processordata) to [SpawnRateData](/vext/ref/fb/spawnratedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProcessorData](/vext/ref/fb/processordata) | The instance to cast to [SpawnRateData](/vext/ref/fb/spawnratedata). |

### SpawnRateData {#constructor-3}

> **SpawnRateData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [SpawnRateData](/vext/ref/fb/spawnratedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [SpawnRateData](/vext/ref/fb/spawnratedata). |

### SpawnRateData {#constructor-4}

> **SpawnRateData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SpawnRateData](/vext/ref/fb/spawnratedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SpawnRateData](/vext/ref/fb/spawnratedata). |

## Properties

### {{% prop-heading "spawnRate" %}}

> **float**

### {{% prop-heading "trailSegmentLength" %}}

> **float**

### {{% prop-heading "distributeOverTime" %}}

> **bool**

### {{% prop-heading "distributeOverDistance" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SpawnRateData](/vext/ref/fb/spawnratedata) type.

