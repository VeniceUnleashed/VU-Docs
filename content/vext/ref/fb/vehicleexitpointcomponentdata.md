---
title: VehicleExitPointComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[VehicleExitPointComponentData](#constructor-0)**() |
| **[VehicleExitPointComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VehicleExitPointComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[VehicleExitPointComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VehicleExitPointComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VehicleExitPointComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "impulse" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "terrainHeight" >}} | float |
| {{< prop "ordinal" >}} | int |
| {{< prop "velocity" >}} | float |
| {{< prop "inheritCameraDirection" >}} | bool |
| {{< prop "checkForVehicleOverrun" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleExitPointComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleExitPointComponentData {#constructor-0}

> **VehicleExitPointComponentData**()

Creates a new [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata) frostbite instance.

### VehicleExitPointComponentData {#constructor-1}

> **VehicleExitPointComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VehicleExitPointComponentData {#constructor-2}

> **VehicleExitPointComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata). |

### VehicleExitPointComponentData {#constructor-3}

> **VehicleExitPointComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata). |

### VehicleExitPointComponentData {#constructor-4}

> **VehicleExitPointComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata). |

### VehicleExitPointComponentData {#constructor-5}

> **VehicleExitPointComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata). |

## Properties

### {{% prop-heading "impulse" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "terrainHeight" %}}

> **float**

### {{% prop-heading "ordinal" %}}

> **int**

### {{% prop-heading "velocity" %}}

> **float**

### {{% prop-heading "inheritCameraDirection" %}}

> **bool**

### {{% prop-heading "checkForVehicleOverrun" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleExitPointComponentData](/vext/ref/fb/vehicleexitpointcomponentdata) type.

