---
title: VehicleDeployWeaponData
---

Inherits from [WeaponData](/vext/ref/fb/weapondata)

## Summary

### Constructors

|  |
| --- |
| **[VehicleDeployWeaponData](#constructor-0)**() |
| **[VehicleDeployWeaponData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VehicleDeployWeaponData](#constructor-2)**(other: [WeaponData](/vext/ref/fb/weapondata)) |
| **[VehicleDeployWeaponData](#constructor-3)**(other: [ToolData](/vext/ref/fb/tooldata)) |
| **[VehicleDeployWeaponData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "deployAreaRadius" >}} | float |
| {{< prop "previewObject" >}} | [ObjectBlueprint](/vext/ref/fb/objectblueprint) \| nil |
| {{< prop "deployAreaGroundRayLength" >}} | float |
| {{< prop "deployAreaGroundFlatness" >}} | float |
| {{< prop "usePreview" >}} | bool |
| {{< prop "checkClearSky" >}} | bool |
| {{< prop "canRemoteEnterVehicle" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VehicleDeployWeaponData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VehicleDeployWeaponData {#constructor-0}

> **VehicleDeployWeaponData**()

Creates a new [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata) frostbite instance.

### VehicleDeployWeaponData {#constructor-1}

> **VehicleDeployWeaponData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VehicleDeployWeaponData {#constructor-2}

> **VehicleDeployWeaponData**(other: [WeaponData](/vext/ref/fb/weapondata))

Casts an instance of type [WeaponData](/vext/ref/fb/weapondata) to [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponData](/vext/ref/fb/weapondata) | The instance to cast to [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata). |

### VehicleDeployWeaponData {#constructor-3}

> **VehicleDeployWeaponData**(other: [ToolData](/vext/ref/fb/tooldata))

Casts an instance of type [ToolData](/vext/ref/fb/tooldata) to [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ToolData](/vext/ref/fb/tooldata) | The instance to cast to [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata). |

### VehicleDeployWeaponData {#constructor-4}

> **VehicleDeployWeaponData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata). |

## Properties

### {{% prop-heading "deployAreaRadius" %}}

> **float**

### {{% prop-heading "previewObject" %}}

> **[ObjectBlueprint](/vext/ref/fb/objectblueprint)** \| **nil**

### {{% prop-heading "deployAreaGroundRayLength" %}}

> **float**

### {{% prop-heading "deployAreaGroundFlatness" %}}

> **float**

### {{% prop-heading "usePreview" %}}

> **bool**

### {{% prop-heading "checkClearSky" %}}

> **bool**

### {{% prop-heading "canRemoteEnterVehicle" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VehicleDeployWeaponData](/vext/ref/fb/vehicledeployweapondata) type.

