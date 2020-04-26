---
title: InspectEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[InspectEntityData](#constructor-0)**() |
| **[InspectEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[InspectEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[InspectEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[InspectEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[InspectEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[InspectEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[InspectEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "centerOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "uiName" >}} | string |
| {{< prop "maxLookAtHeight" >}} | float |
| {{< prop "viewPoints" >}} | [InspectViewPointData](/vext/ref/fb/inspectviewpointdata)[] |
| {{< prop "cameras" >}} | [TargetCameraData](/vext/ref/fb/targetcameradata)[] |
| {{< prop "minLookAtHeight" >}} | float |
| {{< prop "minDistance" >}} | float |
| {{< prop "zoomScrollSpeed" >}} | float |
| {{< prop "maxDistance" >}} | float |
| {{< prop "animationSignal" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "zoomScrollAcceleration" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InspectEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InspectEntityData {#constructor-0}
> **InspectEntityData**()

Creates a new [InspectEntityData](/vext/ref/fb/inspectentitydata) frostbite instance.

### InspectEntityData {#constructor-1}
> **InspectEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [InspectEntityData](/vext/ref/fb/inspectentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### InspectEntityData {#constructor-2}
> **InspectEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [InspectEntityData](/vext/ref/fb/inspectentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [InspectEntityData](/vext/ref/fb/inspectentitydata). |

### InspectEntityData {#constructor-3}
> **InspectEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [InspectEntityData](/vext/ref/fb/inspectentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [InspectEntityData](/vext/ref/fb/inspectentitydata). |

### InspectEntityData {#constructor-4}
> **InspectEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [InspectEntityData](/vext/ref/fb/inspectentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [InspectEntityData](/vext/ref/fb/inspectentitydata). |

### InspectEntityData {#constructor-5}
> **InspectEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [InspectEntityData](/vext/ref/fb/inspectentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [InspectEntityData](/vext/ref/fb/inspectentitydata). |

### InspectEntityData {#constructor-6}
> **InspectEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [InspectEntityData](/vext/ref/fb/inspectentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [InspectEntityData](/vext/ref/fb/inspectentitydata). |

### InspectEntityData {#constructor-7}
> **InspectEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InspectEntityData](/vext/ref/fb/inspectentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [InspectEntityData](/vext/ref/fb/inspectentitydata). |

## Properties
### {{% prop-heading "centerOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "uiName" %}}
> **string**

### {{% prop-heading "maxLookAtHeight" %}}
> **float**

### {{% prop-heading "viewPoints" %}}
> **[InspectViewPointData](/vext/ref/fb/inspectviewpointdata)**[]

### {{% prop-heading "cameras" %}}
> **[TargetCameraData](/vext/ref/fb/targetcameradata)**[]

### {{% prop-heading "minLookAtHeight" %}}
> **float**

### {{% prop-heading "minDistance" %}}
> **float**

### {{% prop-heading "zoomScrollSpeed" %}}
> **float**

### {{% prop-heading "maxDistance" %}}
> **float**

### {{% prop-heading "animationSignal" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "zoomScrollAcceleration" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InspectEntityData](/vext/ref/fb/inspectentitydata) type.

