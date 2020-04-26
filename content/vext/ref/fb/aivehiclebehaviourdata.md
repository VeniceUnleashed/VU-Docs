---
title: AIVehicleBehaviourData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AIVehicleBehaviourData](#constructor-0)**() |
| **[AIVehicleBehaviourData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AIVehicleBehaviourData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "controls" >}} | string[] |
| {{< prop "behaviours" >}} | string[] |
| {{< prop "goals" >}} | string[] |
| {{< prop "intents" >}} | [IntentData](/vext/ref/fb/intentdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AIVehicleBehaviourData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AIVehicleBehaviourData {#constructor-0}

> **AIVehicleBehaviourData**()

Creates a new [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata) frostbite instance.

### AIVehicleBehaviourData {#constructor-1}

> **AIVehicleBehaviourData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AIVehicleBehaviourData {#constructor-2}

> **AIVehicleBehaviourData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "controls" %}}

> **string**[]

### {{% prop-heading "behaviours" %}}

> **string**[]

### {{% prop-heading "goals" %}}

> **string**[]

### {{% prop-heading "intents" %}}

> **[IntentData](/vext/ref/fb/intentdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata) type.

