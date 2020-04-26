---
title: ChildComponentData
---

Inherits from 
[PartComponentData](/vext/ref/fb/partcomponentdata)

## Summary
### Constructors
| |
| ----------- |
| **[ChildComponentData](#constructor-0)**() |
| **[ChildComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ChildComponentData](#constructor-2)**(other: [PartComponentData](/vext/ref/fb/partcomponentdata)) |
| **[ChildComponentData](#constructor-3)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[ChildComponentData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ChildComponentData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ChildComponentData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "alignTransform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "movingBody" >}} | [MovingBodyData](/vext/ref/fb/movingbodydata) \| nil |
| {{< prop "healthZone" >}} | [VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata) |
| {{< prop "soundEffectStartRpm" >}} | float |
| {{< prop "soundEffectStopRpm" >}} | float |
| {{< prop "alignmentSettings" >}} | [AlignmentData](/vext/ref/fb/alignmentdata) \| nil |
| {{< prop "soundEffect" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "enableAlignToCamera" >}} | bool |
| {{< prop "worldSpacePositionLock" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ChildComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ChildComponentData {#constructor-0}
> **ChildComponentData**()

Creates a new [ChildComponentData](/vext/ref/fb/childcomponentdata) frostbite instance.

### ChildComponentData {#constructor-1}
> **ChildComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ChildComponentData](/vext/ref/fb/childcomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ChildComponentData {#constructor-2}
> **ChildComponentData**(other: [PartComponentData](/vext/ref/fb/partcomponentdata))

Casts an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata) to [ChildComponentData](/vext/ref/fb/childcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PartComponentData](/vext/ref/fb/partcomponentdata) | The instance to cast to [ChildComponentData](/vext/ref/fb/childcomponentdata). |

### ChildComponentData {#constructor-3}
> **ChildComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [ChildComponentData](/vext/ref/fb/childcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [ChildComponentData](/vext/ref/fb/childcomponentdata). |

### ChildComponentData {#constructor-4}
> **ChildComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ChildComponentData](/vext/ref/fb/childcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ChildComponentData](/vext/ref/fb/childcomponentdata). |

### ChildComponentData {#constructor-5}
> **ChildComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ChildComponentData](/vext/ref/fb/childcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ChildComponentData](/vext/ref/fb/childcomponentdata). |

### ChildComponentData {#constructor-6}
> **ChildComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChildComponentData](/vext/ref/fb/childcomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ChildComponentData](/vext/ref/fb/childcomponentdata). |

## Properties
### {{% prop-heading "alignTransform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "movingBody" %}}
> **[MovingBodyData](/vext/ref/fb/movingbodydata)** | **nil**

### {{% prop-heading "healthZone" %}}
> **[VehicleHealthZoneData](/vext/ref/fb/vehiclehealthzonedata)**

### {{% prop-heading "soundEffectStartRpm" %}}
> **float**

### {{% prop-heading "soundEffectStopRpm" %}}
> **float**

### {{% prop-heading "alignmentSettings" %}}
> **[AlignmentData](/vext/ref/fb/alignmentdata)** | **nil**

### {{% prop-heading "soundEffect" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "enableAlignToCamera" %}}
> **bool**

### {{% prop-heading "worldSpacePositionLock" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ChildComponentData](/vext/ref/fb/childcomponentdata) type.

