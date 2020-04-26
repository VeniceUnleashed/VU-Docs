---
title: SoldierCameraComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[SoldierCameraComponentData](#constructor-0)**() |
| **[SoldierCameraComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoldierCameraComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[SoldierCameraComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SoldierCameraComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SoldierCameraComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "explosionImpulseMultiplier" >}} | float |
| {{< prop "strafeTiltStrength" >}} | float |
| {{< prop "pitchTiltStrength" >}} | float |
| {{< prop "cameras" >}} | [TargetCameraData](/vext/ref/fb/targetcameradata)[] |
| {{< prop "cameraBinding" >}} | [CameraBinding](/vext/ref/fb/camerabinding) |
| {{< prop "forceFieldOfView" >}} | float |
| {{< prop "authoritativeEyePosition" >}} | bool |
| {{< prop "disableAiming" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierCameraComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierCameraComponentData {#constructor-0}
> **SoldierCameraComponentData**()

Creates a new [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata) frostbite instance.

### SoldierCameraComponentData {#constructor-1}
> **SoldierCameraComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoldierCameraComponentData {#constructor-2}
> **SoldierCameraComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata). |

### SoldierCameraComponentData {#constructor-3}
> **SoldierCameraComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata). |

### SoldierCameraComponentData {#constructor-4}
> **SoldierCameraComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata). |

### SoldierCameraComponentData {#constructor-5}
> **SoldierCameraComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata). |

## Properties
### {{% prop-heading "explosionImpulseMultiplier" %}}
> **float**

### {{% prop-heading "strafeTiltStrength" %}}
> **float**

### {{% prop-heading "pitchTiltStrength" %}}
> **float**

### {{% prop-heading "cameras" %}}
> **[TargetCameraData](/vext/ref/fb/targetcameradata)**[]

### {{% prop-heading "cameraBinding" %}}
> **[CameraBinding](/vext/ref/fb/camerabinding)**

### {{% prop-heading "forceFieldOfView" %}}
> **float**

### {{% prop-heading "authoritativeEyePosition" %}}
> **bool**

### {{% prop-heading "disableAiming" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierCameraComponentData](/vext/ref/fb/soldiercameracomponentdata) type.

