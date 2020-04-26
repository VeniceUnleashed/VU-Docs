---
title: AIVehicleBehaviourData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[AIVehicleBehaviourData](#constructor-0)**() |
| **[AIVehicleBehaviourData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AIVehicleBehaviourData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

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
| {{< static "AIVehicleBehaviourData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AIVehicleBehaviourData {#constructor-0}
> **AIVehicleBehaviourData**()

Creates a new [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata) frostbite instance.

### AIVehicleBehaviourData {#constructor-1}
> **AIVehicleBehaviourData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AIVehicleBehaviourData {#constructor-2}
> **AIVehicleBehaviourData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata). |

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
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AIVehicleBehaviourData](/vext/ref/fb/aivehiclebehaviourdata) type.

