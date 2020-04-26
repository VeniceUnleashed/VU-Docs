---
title: CameraParamsComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[CameraParamsComponentData](#constructor-0)**() |
| **[CameraParamsComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CameraParamsComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[CameraParamsComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CameraParamsComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CameraParamsComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "viewDistance" >}} | float |
| {{< prop "nearPlane" >}} | float |
| {{< prop "sunShadowmapViewDistance" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CameraParamsComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CameraParamsComponentData {#constructor-0}
> **CameraParamsComponentData**()

Creates a new [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata) frostbite instance.

### CameraParamsComponentData {#constructor-1}
> **CameraParamsComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CameraParamsComponentData {#constructor-2}
> **CameraParamsComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata). |

### CameraParamsComponentData {#constructor-3}
> **CameraParamsComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata). |

### CameraParamsComponentData {#constructor-4}
> **CameraParamsComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata). |

### CameraParamsComponentData {#constructor-5}
> **CameraParamsComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata). |

## Properties
### {{% prop-heading "viewDistance" %}}
> **float**

### {{% prop-heading "nearPlane" %}}
> **float**

### {{% prop-heading "sunShadowmapViewDistance" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CameraParamsComponentData](/vext/ref/fb/cameraparamscomponentdata) type.

