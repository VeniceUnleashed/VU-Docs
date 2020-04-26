---
title: LocalForceData
---

Inherits from [ProcessorData](/vext/ref/fb/processordata)

## Summary

### Constructors

|  |
| --- |
| **[LocalForceData](#constructor-0)**() |
| **[LocalForceData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LocalForceData](#constructor-2)**(other: [ProcessorData](/vext/ref/fb/processordata)) |
| **[LocalForceData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[LocalForceData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "localForce" >}} | [Vec3](/vext/ref/shared/type/vec3) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LocalForceData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LocalForceData {#constructor-0}

> **LocalForceData**()

Creates a new [LocalForceData](/vext/ref/fb/localforcedata) frostbite instance.

### LocalForceData {#constructor-1}

> **LocalForceData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LocalForceData](/vext/ref/fb/localforcedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LocalForceData {#constructor-2}

> **LocalForceData**(other: [ProcessorData](/vext/ref/fb/processordata))

Casts an instance of type [ProcessorData](/vext/ref/fb/processordata) to [LocalForceData](/vext/ref/fb/localforcedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProcessorData](/vext/ref/fb/processordata) | The instance to cast to [LocalForceData](/vext/ref/fb/localforcedata). |

### LocalForceData {#constructor-3}

> **LocalForceData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [LocalForceData](/vext/ref/fb/localforcedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [LocalForceData](/vext/ref/fb/localforcedata). |

### LocalForceData {#constructor-4}

> **LocalForceData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LocalForceData](/vext/ref/fb/localforcedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LocalForceData](/vext/ref/fb/localforcedata). |

## Properties

### {{% prop-heading "localForce" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LocalForceData](/vext/ref/fb/localforcedata) type.

