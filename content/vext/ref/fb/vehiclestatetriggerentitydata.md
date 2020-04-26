---
title: VehicleStateTriggerEntityData
---

Inherits from [TriggerEntityData](/vext/ref/fb/triggerentitydata)

## Summary

### Constructors

|  |
| --- |
| **[VehicleStateTriggerEntityData](#constructor-0)**() |
| **[VehicleStateTriggerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VehicleStateTriggerEntityData](#constructor-2)**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata)) |
| **[VehicleStateTriggerEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[VehicleStateTriggerEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[VehicleStateTriggerEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[VehicleStateTriggerEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VehicleStateTriggerEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VehicleStateTriggerEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "lockAmount" >}} | float |
| {{< prop "bulletCount" >}} | int |
| {{< prop "healthToSet" >}} | int |
| {{< prop "seatSpecificIndexForHuman" >}} | int |
| {{< prop "seatSpecificIndexForAi" >}} | int |
| {{< prop "destructionRadius" >}} | float |
| {{< prop "healthToCheck" >}} | int |
| {{< prop "allowHumanToEnterAllSeats" >}} | bool |
| {{< prop "allowAiToEnterAllSeats" >}} | bool |
| {{< prop "banAiFromSpecificSeat" >}} | bool |
| {{< prop "triggerCriticalOnHealthSet" >}} | bool |
| {{< prop "checkHealthGreaterOrEqual" >}} | bool |
| {{< prop "restrictHumanToSpecificSeat" >}} | bool |
| {{< prop "shouldDestroyVehicles" >}} | bool |
| {{< prop "shouldDestroyBangers" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleStateTriggerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleStateTriggerEntityData {#constructor-0}

> **VehicleStateTriggerEntityData**()

Creates a new [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata) frostbite instance.

### VehicleStateTriggerEntityData {#constructor-1}

> **VehicleStateTriggerEntityData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VehicleStateTriggerEntityData {#constructor-2}

> **VehicleStateTriggerEntityData**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata))

Casts an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TriggerEntityData](/vext/ref/fb/triggerentitydata) | The instance to cast to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). |

### VehicleStateTriggerEntityData {#constructor-3}

> **VehicleStateTriggerEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). |

### VehicleStateTriggerEntityData {#constructor-4}

> **VehicleStateTriggerEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). |

### VehicleStateTriggerEntityData {#constructor-5}

> **VehicleStateTriggerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). |

### VehicleStateTriggerEntityData {#constructor-6}

> **VehicleStateTriggerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). |

### VehicleStateTriggerEntityData {#constructor-7}

> **VehicleStateTriggerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). |

### VehicleStateTriggerEntityData {#constructor-8}

> **VehicleStateTriggerEntityData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata). |

## Properties

### {{% prop-heading "lockAmount" %}}

> **float**

### {{% prop-heading "bulletCount" %}}

> **int**

### {{% prop-heading "healthToSet" %}}

> **int**

### {{% prop-heading "seatSpecificIndexForHuman" %}}

> **int**

### {{% prop-heading "seatSpecificIndexForAi" %}}

> **int**

### {{% prop-heading "destructionRadius" %}}

> **float**

### {{% prop-heading "healthToCheck" %}}

> **int**

### {{% prop-heading "allowHumanToEnterAllSeats" %}}

> **bool**

### {{% prop-heading "allowAiToEnterAllSeats" %}}

> **bool**

### {{% prop-heading "banAiFromSpecificSeat" %}}

> **bool**

### {{% prop-heading "triggerCriticalOnHealthSet" %}}

> **bool**

### {{% prop-heading "checkHealthGreaterOrEqual" %}}

> **bool**

### {{% prop-heading "restrictHumanToSpecificSeat" %}}

> **bool**

### {{% prop-heading "shouldDestroyVehicles" %}}

> **bool**

### {{% prop-heading "shouldDestroyBangers" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleStateTriggerEntityData](/vext/ref/fb/vehiclestatetriggerentitydata) type.

