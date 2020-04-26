---
title: AirResistanceData
---

Inherits from [ProcessorData](/vext/ref/fb/processordata)

## Summary

### Constructors

|  |
| --- |
| **[AirResistanceData](#constructor-0)**() |
| **[AirResistanceData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AirResistanceData](#constructor-2)**(other: [ProcessorData](/vext/ref/fb/processordata)) |
| **[AirResistanceData](#constructor-3)**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata)) |
| **[AirResistanceData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dragFactor" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AirResistanceData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AirResistanceData {#constructor-0}

> **AirResistanceData**()

Creates a new [AirResistanceData](/vext/ref/fb/airresistancedata) frostbite instance.

### AirResistanceData {#constructor-1}

> **AirResistanceData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AirResistanceData](/vext/ref/fb/airresistancedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AirResistanceData {#constructor-2}

> **AirResistanceData**(other: [ProcessorData](/vext/ref/fb/processordata))

Casts an instance of type [ProcessorData](/vext/ref/fb/processordata) to [AirResistanceData](/vext/ref/fb/airresistancedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ProcessorData](/vext/ref/fb/processordata) | The instance to cast to [AirResistanceData](/vext/ref/fb/airresistancedata). |

### AirResistanceData {#constructor-3}

> **AirResistanceData**(other: [EmitterComponentData](/vext/ref/fb/emittercomponentdata))

Casts an instance of type [EmitterComponentData](/vext/ref/fb/emittercomponentdata) to [AirResistanceData](/vext/ref/fb/airresistancedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EmitterComponentData](/vext/ref/fb/emittercomponentdata) | The instance to cast to [AirResistanceData](/vext/ref/fb/airresistancedata). |

### AirResistanceData {#constructor-4}

> **AirResistanceData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AirResistanceData](/vext/ref/fb/airresistancedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AirResistanceData](/vext/ref/fb/airresistancedata). |

## Properties

### {{% prop-heading "dragFactor" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AirResistanceData](/vext/ref/fb/airresistancedata) type.

