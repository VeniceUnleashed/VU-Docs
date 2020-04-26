---
title: DamageToVehicleEvent
---

Inherits from 
[MetricEvent](/vext/ref/fb/metricevent)

## Summary
### Constructors
| |
| ----------- |
| **[DamageToVehicleEvent](#constructor-0)**() |
| **[DamageToVehicleEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DamageToVehicleEvent](#constructor-2)**(other: [MetricEvent](/vext/ref/fb/metricevent)) |
| **[DamageToVehicleEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "vehicleName" >}} | string |
| {{< prop "weaponName" >}} | string |
| {{< prop "damageAmount" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DamageToVehicleEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DamageToVehicleEvent {#constructor-0}
> **DamageToVehicleEvent**()

Creates a new [DamageToVehicleEvent](/vext/ref/fb/damagetovehicleevent) frostbite instance.

### DamageToVehicleEvent {#constructor-1}
> **DamageToVehicleEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DamageToVehicleEvent](/vext/ref/fb/damagetovehicleevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DamageToVehicleEvent {#constructor-2}
> **DamageToVehicleEvent**(other: [MetricEvent](/vext/ref/fb/metricevent))

Casts an instance of type [MetricEvent](/vext/ref/fb/metricevent) to [DamageToVehicleEvent](/vext/ref/fb/damagetovehicleevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MetricEvent](/vext/ref/fb/metricevent) | The instance to cast to [DamageToVehicleEvent](/vext/ref/fb/damagetovehicleevent). |

### DamageToVehicleEvent {#constructor-3}
> **DamageToVehicleEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DamageToVehicleEvent](/vext/ref/fb/damagetovehicleevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DamageToVehicleEvent](/vext/ref/fb/damagetovehicleevent). |

## Properties
### {{% prop-heading "vehicleName" %}}
> **string**

### {{% prop-heading "weaponName" %}}
> **string**

### {{% prop-heading "damageAmount" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DamageToVehicleEvent](/vext/ref/fb/damagetovehicleevent) type.

