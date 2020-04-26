---
title: ArmamentData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[ArmamentData](#constructor-0)**() |
| **[ArmamentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ArmamentData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "threatLength" >}} | int |
| {{< prop "turretData" >}} | [TurretData](/vext/ref/fb/turretdata) \| nil |
| {{< prop "isAntiAircraft" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ArmamentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ArmamentData {#constructor-0}

> **ArmamentData**()

Creates a new [ArmamentData](/vext/ref/fb/armamentdata) frostbite instance.

### ArmamentData {#constructor-1}

> **ArmamentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ArmamentData](/vext/ref/fb/armamentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ArmamentData {#constructor-2}

> **ArmamentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ArmamentData](/vext/ref/fb/armamentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ArmamentData](/vext/ref/fb/armamentdata). |

## Properties

### {{% prop-heading "threatLength" %}}

> **int**

### {{% prop-heading "turretData" %}}

> **[TurretData](/vext/ref/fb/turretdata)** \| **nil**

### {{% prop-heading "isAntiAircraft" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ArmamentData](/vext/ref/fb/armamentdata) type.

