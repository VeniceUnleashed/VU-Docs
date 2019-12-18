---
title: VisualEnvironmentState (Client Class)
---
## Description

## Constructors

| Constructor                                                                                                                                          | Description                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [VisualEnvironmentState](/vext/ref/cls/clt/visualenvironmentstate)(string **entityName** = "")                                                    |                                                          |
| [VisualEnvironmentState](/vext/ref/cls/clt/visualenvironmentstate)([VisualEnvironmentState](/vext/ref/cls/clt/visualenvironmentstate) **ref**) | Create a reference copy of an instance of the same type. |

## Properties

| Name                 | Type                                                                | Writable | Description |
| -------------------- | ------------------------------------------------------------------- | -------- | ----------- |
| entityName           | string                                                              |          |             |
| visibility           | float                                                               |          |             |
| priority             | int                                                                 |          |             |
| overrideVisibility   | bool                                                                |          |             |
| excluded             | bool                                                                |          |             |
| stateId              | int                                                                 |          |             |
| activeEffectPosition | [Vec3](/vext/ref/cls/shr/vec3)                                   |          |             |
| sharedParamsCount    | int                                                                 |          |             |
| outdoorLight         | [OutdoorLightData](/vext/ref/cls/clt/outdoorlightdata)           |          |             |
| enlighten            | [EnlightenData](/vext/ref/cls/clt/enlightendata)                 |          |             |
| tonemap              | [TonemapData](/vext/ref/cls/clt/tonemapdata)                     |          |             |
| colorCorrection      | [ColorCorrectionData](/vext/ref/cls/clt/colorcorrectiondata)     |          |             |
| sky                  | [SkyData](/vext/ref/cls/clt/skydata)                             |          |             |
| fog                  | [FogData](/vext/ref/cls/clt/fogdata)                             |          |             |
| wind                 | [WindData](/vext/ref/cls/clt/winddata)                           |          |             |
| sunFlare             | [SunFlareData](/vext/ref/cls/clt/sunflaredata)                   |          |             |
| dynamicAO            | [DynamicAOData](/vext/ref/cls/clt/dynamicaodata)                 |          |             |
| dof                  | [DofData](/vext/ref/cls/clt/dofdata)                             |          |             |
| vignette             | [VignetteData](/vext/ref/cls/clt/vignettedata)                   |          |             |
| filmGrain            | [FilmGrainData](/vext/ref/cls/clt/filmgraindata)                 |          |             |
| lensScope            | [LensScopeData](/vext/ref/cls/clt/lensscopedata)                 |          |             |
| cameraParams         | [CameraParamsData](/vext/ref/cls/clt/cameraparamsdata)           |          |             |
| screenEffect         | [ScreenEffectData](/vext/ref/cls/clt/screeneffectdata)           |          |             |
| damageEffect         | [DamageEffectData](/vext/ref/cls/clt/damageeffectdata)           |          |             |
| planarReflection     | [PlanarReflectionData](/vext/ref/cls/clt/planarreflectiondata)   |          |             |
| dynamicEnvmap        | [DynamicEnvmapData](/vext/ref/cls/clt/dynamicenvmapdata)         |          |             |
| characterLighting    | [CharacterLightingData](/vext/ref/cls/clt/characterlightingdata) |          |             |
| motionBlur           | [MotionBlurData](/vext/ref/cls/clt/motionblurdata)               |          |             |
