---
title: AIVehicleTypes
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[AIVehicleTypes](#constructor-0)**() |
| **[AIVehicleTypes](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AIVehicleTypes](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[AIVehicleTypes](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "vehicleTypes" >}} | [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata)[] |
| {{< prop "goals" >}} | [BehaviourData](/vext/ref/fb/behaviourdata)[] |
| {{< prop "intents" >}} | [BehaviourData](/vext/ref/fb/behaviourdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AIVehicleTypes" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AIVehicleTypes {#constructor-0}

> **AIVehicleTypes**()

Creates a new [AIVehicleTypes](/vext/ref/fb/aivehicletypes) frostbite instance.

### AIVehicleTypes {#constructor-1}

> **AIVehicleTypes**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AIVehicleTypes](/vext/ref/fb/aivehicletypes) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AIVehicleTypes {#constructor-2}

> **AIVehicleTypes**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [AIVehicleTypes](/vext/ref/fb/aivehicletypes). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [AIVehicleTypes](/vext/ref/fb/aivehicletypes). |

### AIVehicleTypes {#constructor-3}

> **AIVehicleTypes**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AIVehicleTypes](/vext/ref/fb/aivehicletypes). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AIVehicleTypes](/vext/ref/fb/aivehicletypes). |

## Properties

### {{% prop-heading "vehicleTypes" %}}

> **[AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata)**[]

### {{% prop-heading "goals" %}}

> **[BehaviourData](/vext/ref/fb/behaviourdata)**[]

### {{% prop-heading "intents" %}}

> **[BehaviourData](/vext/ref/fb/behaviourdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AIVehicleTypes](/vext/ref/fb/aivehicletypes) type.

